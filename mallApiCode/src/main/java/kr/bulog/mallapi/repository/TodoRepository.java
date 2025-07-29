package kr.bulog.mallapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.bulog.mallapi.domain.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    
    
}