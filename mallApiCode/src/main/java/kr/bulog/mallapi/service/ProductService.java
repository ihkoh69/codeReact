package kr.bulog.mallapi.service;

import org.springframework.transaction.annotation.Transactional;

import kr.bulog.mallapi.dto.PageRequestDTO;
import kr.bulog.mallapi.dto.PageResponseDTO;
import kr.bulog.mallapi.dto.ProductDTO;

@Transactional
public interface ProductService {

	PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO);
}
