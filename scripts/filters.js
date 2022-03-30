export const byMood = (thisMood) => {
  return fetch(`http://localhost:8088/posts?_sort=date&_order=desc&mood=${thisMood}`).then(
    (response) => response.json()
  );
};
