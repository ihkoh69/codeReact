package kr.bulog.mallapi.controller.advice;

import java.util.Map;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class CustomErrorController implements ErrorController {

	@RequestMapping("/error")
	public ResponseEntity<?> handleError(HttpServletRequest request) {
		Object statusCode = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
		HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
		
		if(statusCode!= null) {
			int statusInt = Integer.parseInt(statusCode.toString());
			status = HttpStatus.valueOf(statusInt);
		}
		
		String msg;
		if(status == HttpStatus.NOT_FOUND) {
			msg = "요청하신 URL이 존재하지 않습니다.";
		}
		else if(status == HttpStatus.METHOD_NOT_ALLOWED) {
			msg = "지원하지않는 요청 식입니다.";
		}
		else if(status == HttpStatus.BAD_REQUEST) {
			msg = "잘못된 요청입니다.";
		}
		else if(status == HttpStatus.UNSUPPORTED_MEDIA_TYPE) {
			msg = "지원하지 않는 미디어 형식입니다. ";
		}
		else {
			msg = "서버 내부 오류가 발생했습니다.";
		}
		
		return ResponseEntity.status(status).body(Map.of("msg", msg));
	}
}
