package kr.bulog.mallapi.controller.advice;

import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

@RestControllerAdvice
public class CustomControllerAdvice {
	
//	@ExceptionHandler(NoSuchElementException.class)
//	protected ResponseEntity<?> notExist(NoSuchElementException e) {
//		String msg = e.getMessage();
//		System.out.println("+++++++++++++++++Error++++++++++++++");
//		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("msg", msg));
//	}
//	
//	@ExceptionHandler(MethodArgumentNotValidException.class)
//	protected ResponseEntity<?> handleIllegalArgumentException(MethodArgumentNotValidException e) {
//		String msg = e.getMessage();
//		System.out.println("=================ERROR=========");
//		return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("msg", msg));
//	}
//	
//	@ExceptionHandler(org.springframework.web.servlet.NoHandlerFoundException.class)
//	protected ResponseEntity<?> handleNotFound(NoHandlerFoundException e) {
//	    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("msg", "잘못된 URL입니다."));
//	}
//
//	
	
}
