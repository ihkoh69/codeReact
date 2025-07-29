package kr.bulog.mallapi.service;

import kr.bulog.mallapi.dto.PageRequestDTO;
import kr.bulog.mallapi.dto.PageResponseDTO;
import kr.bulog.mallapi.dto.TodoDTO;


public interface TodoService {

    Long register(TodoDTO todoDTO);

    TodoDTO get(Long tno);
    
    void modify(TodoDTO todoDTO);
    
    void remove(Long tno);
    
    PageResponseDTO<TodoDTO> list(PageRequestDTO pageReqeustDTO);
}

