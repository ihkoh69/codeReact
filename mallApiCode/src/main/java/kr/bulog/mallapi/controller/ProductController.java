package kr.bulog.mallapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.bulog.mallapi.dto.ProductDTO;
import kr.bulog.mallapi.util.CustomFileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/products")
public class ProductController {
	
	private final CustomFileUtil fileUtil;
	
	@PostMapping("/")
	private Map<String, String> register(ProductDTO productDTO) {
		log.info("register: " + productDTO);
		
		List<MultipartFile> files = productDTO.getFiles();
		List<String> uploadFileNames = fileUtil.saveFiles(files);
		
		productDTO.setUploadFileNames(uploadFileNames);
		
		log.info(uploadFileNames);
		
		return Map.of("RESULT", "SUCCESS");
	}
	
	@GetMapping("/view/{fileName}")
	public ResponseEntity<Resource> viewFileGet(@PathVariable("fileName") String fileName) {
		return fileUtil.getFile(fileName);
	}

}
