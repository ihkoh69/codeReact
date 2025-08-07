package kr.bulog.mallapi.security.filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.google.gson.Gson;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.bulog.mallapi.dto.MemberDTO;
import kr.bulog.mallapi.util.JWTUtil;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class JWTCheckFilter extends OncePerRequestFilter{@Override
	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
	
		// Preflight요청은 체크하지 않음 
		if(request.getMethod().equals("OPTIONS")) {
			return true;
		}
		
		
		String path = request.getRequestURI();
		log.info("=============================================================");
		log.info("Check URI .............. " + path);	
		log.info("=============================================================");
		
		// api/member 경로의 호출은 체크하지 않음
		if(path.startsWith("/api/member/")) {
				return true;
		}
		
		// 이미지 조회 경로는 체크하지 않는다 
		if(path.startsWith("/api/products/view/")) {
			return true;
		}
		
		
		return false;
		
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		log.info("============================= JWTCheckFilter ================================");
		
		String authHeaderStr = request.getHeader("Authorization");
		
		try {
			// bearer accesstoken....
			String accessToken = authHeaderStr.substring(7);
			Map<String, Object> claims = JWTUtil.validateToken(accessToken);			
			log.info("JWT claims: " + claims);
			
			
			String email = (String) claims.get("email");
			String pw = (String) claims.get("pw");
			String nickname = (String) claims.get("nickname");
			Boolean social = (Boolean) claims.get("social");
			List<String> roleNames = (List<String>)claims.get("roleNames");
			
			MemberDTO memberDTO = new MemberDTO(email, pw, nickname, social.booleanValue(), roleNames);
			
			log.info("====================================================================");
			log.info(memberDTO);
			log.info(memberDTO.getAuthorities());
			
			UsernamePasswordAuthenticationToken authenticationToken 
						= new UsernamePasswordAuthenticationToken(memberDTO,  pw, memberDTO.getAuthorities());
			
			SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			
			
			filterChain.doFilter(request, response);
			log.info("=============================================================================");
			
		} catch(Exception e) {
			log.error("JWT Check Error..........");
			log.error(e.getMessage());
			
			Gson gson = new Gson();
			String msg = gson.toJson(Map.of("error", "ERROR_ACCESS_TOKEN"));
			
			response.setContentType("application/json");
			PrintWriter printWriter = response.getWriter();
			printWriter.println(msg);
			printWriter.close();
		}



	}

	
	
}
