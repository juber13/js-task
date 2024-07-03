const skeletonLoader = document.querySelector('.skeleton-loader');
let isLoading = false;

function createSkeletonItem() {
  const skeletonItem = document.createElement('div');
  skeletonItem.classList.add('skeleton-item');
  return skeletonItem;
}

function loadMoreItems() {
  if (isLoading) return;
  isLoading = true;

  // Simulate loading data
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      skeletonLoader.appendChild(createSkeletonItem());
    }
    isLoading = false;
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  skeletonLoader.appendChild(createSkeletonItem());
}
