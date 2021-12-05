// axios interceptors
// axios instance

const useGetProducts = (query = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    const res = axios.get("/products", {
      params: query,
    });

    setLoading(false);
    setData(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return [data, loading, fetchProducts];
};
