class FakeStoreApi {
  baseUrl = "https://fakestoreapi.com/products";

  fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
      });
  }

  getAllProducts(limit = null) {
    const url =
      limit == null ? `${this.baseUrl}` : `${this.baseUrl}?limit=${limit}`;
    return this.fetchData(url);
  }

  getAllCategories() {
    const url = `${this.baseUrl}/categories`;
    return this.fetchData(url);
  }

  getProductsByCategory(category) {
    const url = `${this.baseUrl}/category/${category}`;
    return this.fetchData(url);
  }

  searchProductById(id) {
    const url = `${this.baseUrl}/${id}`;
    return this.fetchData(url);
  }
  getProductById(id) {
    const url = `${this.baseUrl}/${id}`;
    return this.fetchData(url);
  }
}

export default new FakeStoreApi();
