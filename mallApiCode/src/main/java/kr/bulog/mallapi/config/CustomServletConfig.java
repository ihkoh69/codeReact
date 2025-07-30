package kr.bulog.mallapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import kr.bulog.mallapi.controller.formatter.LocalDateFormatter;

@Configuration
public class CustomServletConfig implements WebMvcConfigurer {

	@Override
	public void addFormatters(@NonNull FormatterRegistry registry) {
		// TODO Auto-generated method stub
		registry.addFormatter(new LocalDateFormatter());
	}

	@Override
	public void addCorsMappings(@NonNull CorsRegistry registry) {
		// TODO Auto-generated method stub
		registry.addMapping("/**")
				.allowedOrigins("*")
				.allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS")
				.maxAge(300)
				.allowedHeaders("Authorization", "Cache-Control", "Content-Type");
	}
	
	
	
}
