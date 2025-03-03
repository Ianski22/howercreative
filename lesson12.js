 document.addEventListener('DOMContentLoaded', function() {
      //  image categories 
      const categories = {
        automotive: ['ferrari.jpg', 'mercedes.jpg', 'porsche.jpg', 'gas.jpg'],
        sports: ['seahawks.jpg', 'mj.jpg', 'np.jpg', 'FNCS_web.jpg'],
        posters: ['1800_Jesus.jpg', 'Christ is king_web.jpg', 'AI_TakeMyJob.jpg', 'IAN_Poster.jpg', 'Hometown_holidays.jpg'],
        other: ['seattle.jpg', 'vans.jpg', 'IMG_1923.jpg']
      };
      
      // Check viewport size to determine if we're on mobile or desktop
      function isMobile() {
        return window.innerWidth < 768;
      }
      
      // Insert only one set of filter buttons based on viewport
      const filterContainer = document.querySelector('.filter-buttons-container');
      
      if (isMobile()) {
        // For mobile view: insert before the gallery
        const galleryContainer = document.querySelector('.gallery-container');
        const galleryElement = document.querySelector('.gallery');
        galleryContainer.insertBefore(filterContainer, galleryElement);
        
        // Hide desktop view completely
        document.querySelector('.pc_images').style.display = 'none';
      } else {
        // For desktop view: insert before the results list
        const pcImages = document.querySelector('.pc_images');
        const resultsElement = document.querySelector('.results');
        pcImages.insertBefore(filterContainer, resultsElement);
        
        // Hide mobile view completely
        document.querySelector('.gallery-container').style.display = 'none';
      }
      
      // center images with in catagory
      function centerImages(filter) {
        if (isMobile()) {
          const galleryContainer = document.querySelector('.gallery');
          
          if (filter === 'all') {
            galleryContainer.classList.remove('filtered');
            document.querySelectorAll('.gallery .gallery-item').forEach(item => {
              item.style.margin = '';
            });
          } else {
            galleryContainer.classList.add('filtered');
            document.querySelectorAll('.gallery .gallery-item:not([style*="display: none"])').forEach(item => {
              item.style.margin = '10px';
            });
          }
        } else {
          const resultsContainer = document.querySelector('.results');
          
          if (filter === 'all') {
            resultsContainer.classList.remove('filtered');
            document.querySelectorAll('.results .result').forEach(item => {
              item.style.margin = '';
            });
          } else {
            resultsContainer.classList.add('filtered');
            document.querySelectorAll('.results .result:not([style*="display: none"])').forEach(item => {
              item.style.margin = '10px';
            });
          }
        }
      }
      
      // Add window resize listener to handle switching between mobile and desktop
      window.addEventListener('resize', function() {
        if (isMobile()) {
          document.querySelector('.pc_images').style.display = 'none';
          document.querySelector('.gallery-container').style.display = 'block';
        } else {
          document.querySelector('.pc_images').style.display = 'block';
          document.querySelector('.gallery-container').style.display = 'none';
        }
      });
      
      // Helper function to check if an image belongs to a category
      function imageBelongsToCategory(src, category) {
        const filename = src.split('/').pop();
        return categories[category].some(item => {
          // Case-insensitive comparison
          return filename.toLowerCase() === item.toLowerCase() || 
                filename.toLowerCase().includes(item.toLowerCase());
        });
      }
      
      // Set up filter functionality
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          // Update active state
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
          });
          this.classList.add('active');
          
          const filter = this.getAttribute('data-filter');
          
          if (isMobile()) {
            // Filter mobile images
            document.querySelectorAll('.gallery .gallery-item').forEach(item => {
              const imgSrc = item.querySelector('img').getAttribute('src');
              
              if (filter === 'all' || imageBelongsToCategory(imgSrc, filter)) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            });
          } else {
            // Filter desktop images
            document.querySelectorAll('.results .result').forEach(item => {
              const imgSrc = item.querySelector('img').getAttribute('src');
              
              if (filter === 'all' || imageBelongsToCategory(imgSrc, filter)) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            });
          }
          
          // Apply centering based on the current filter
          centerImages(filter);
        });
      });
    });
