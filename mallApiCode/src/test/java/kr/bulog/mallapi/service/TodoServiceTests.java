package kr.bulog.mallapi.service;

import java.time.LocalDate;

import kr.bulog.mallapi.service.TodoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import kr.bulog.mallapi.dto.PageRequestDTO;
import kr.bulog.mallapi.dto.PageResponseDTO;
import kr.bulog.mallapi.dto.TodoDTO;
import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoServiceTests {
    
    @Autowired
    private TodoService todoService;

//    @Test
//    public void testRegister() {
//        TodoDTO todoDTO = TodoDTO.builder()
//        .title("서비스 테스트")
//        .writer("테스터")
//        .dueDate(LocalDate.of(2025,02,01))
//        .build();
//
//        Long tno = todoService.register(todoDTO);
//
//        log.info("====================================");
//        log.info("새로 등록된 할일 tno 번호: " + tno);
//        log.info("====================================");
//    }
    
//    @Test   
//    public void testGet() {
//    	Long tno = 101L;
//    	
//    	TodoDTO todoDTO = todoService.get(tno);
//    	
//        log.info("====================================");
//        log.info("dto객체 : " + todoDTO);
//        log.info("====================================");
//   
//    }
    
    @Test
    public void testList() {
    	
    	PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
    			.page(2)
    			.size(10)
    			.build();
    	
    	PageResponseDTO<TodoDTO> response = todoService.list(pageRequestDTO);
    	
        log.info("====================================");
        log.info("PageResponseDTO<TodoDTO> : " + response);
        log.info("====================================");
    }
    
}