package kr.bulog.mallapi.repository;



import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import kr.bulog.mallapi.domain.Todo;
import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {
    
    @Autowired
    private TodoRepository todoRepository;

//    @Test
//    public void test1() {
//        log.info("=======================");
//        log.info(todoRepository);
//    }

//    @Test
//    public void testInsert() {
//        for(int i = 1; i <=100; i++) {
//            Todo todo = Todo.builder()
//            .title("Title..." + i)
//            .dueDate(LocalDate.of(2023,12,31))
//            .writer("user"+i)
//            .build(); 
//
//            todoRepository.save(todo);
//        }
//    }
    
//    @Test
//    public void testRead() {
//    	Long tno = 33L;
//    	java.util.Optional<Todo> result = todoRepository.findById(tno);
//    	
//    	Todo todo = result.orElseThrow();
//    	log.info("====================================");
//    	log.info(todo);
//    	log.info("====================================");
//    }

//    @Test    
//    public void testModify() {
//        Long tno = 33L;
//
//        java.util.Optional <Todo> result = todoRepository.findById(tno);
//        Todo todo = result.orElseThrow();
//        todo.changeTitle("Modified 33...");
//        todo.changeComplete(true);
//        todo.changeDueDate(LocalDate.of(2024,07,07));
//
//        todoRepository.save(todo);
//    }

    // @Test
    // public void testDelete() {
    //     Long tno = 1L;

    //     todoRepository.deleteById(tno);
    // }

//    @Test
//    public void testPaging() {
//        Pageable pageable = PageRequest.of(0,10, Sort.by("tno").descending());
//
//        Page <Todo> result = todoRepository.findAll(pageable);
//        log.info("====================================");
//        log.info(result.getTotalElements());
//        log.info("====================================");
//        
//        
//        result.getContent().stream().forEach(todo -> log.info(todo));
//    }
}
