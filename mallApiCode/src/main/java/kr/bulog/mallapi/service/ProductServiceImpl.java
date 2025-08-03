package kr.bulog.mallapi.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.bulog.mallapi.domain.Product;
import kr.bulog.mallapi.domain.ProductImage;
import kr.bulog.mallapi.dto.PageRequestDTO;
import kr.bulog.mallapi.dto.PageResponseDTO;
import kr.bulog.mallapi.dto.ProductDTO;
import kr.bulog.mallapi.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class ProductServiceImpl implements ProductService {
	
	private final ProductRepository productRepository;
	
	
	@Override
	public PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO) {
	
		log.info("getList...........");
		
		Pageable pageable = PageRequest.of(
				pageRequestDTO.getPage() -1, //페이지 시작번호가 0부터 시작하므로
				pageRequestDTO.getSize(),
				Sort.by("pno").descending()
		);
	    
		Page<Object[]> result = productRepository.selectList(pageable);
		
		List<ProductDTO> dtoList = result.get().map(arr -> {
			Product product = (Product) arr[0];
			ProductImage productImage = (ProductImage) arr[1];
			
			ProductDTO productDTO = ProductDTO.builder()
					.pno(product.getPno())
					.pname(product.getPname())
					.pdesc(product.getPdesc())
					.price(product.getPrice())
					.build();
			
			String imageStr = productImage.getFileName();
			productDTO.setUploadFileNames(List.of(imageStr));
			
			return productDTO;
			
		}).collect(Collectors.toList());
		
		long totalCount = result.getTotalElements();
		
		return PageResponseDTO.<ProductDTO>withAll()
				.dtoList(dtoList)
				.totalCount(totalCount)
				.pageRequestDTO(pageRequestDTO)
				.build();
	}

}
