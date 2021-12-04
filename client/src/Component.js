// RTK (Redux Tool Kit) Query

const Component = () => {
  const [productData, productIsFetching, refetchProducts] = useGetProducts({
    category: "kaos",
  });

  return <div>Hello</div>;
};

// feat - jika ada update fitur
// fix - jika ada bugfix / ui fix
// ui - jika ada perubahan tampilan
// chore - jika ada perubahan yang tidak melibatkan fitur ataupun tampilan (cth: install package)
// docs - jika ada perubahan di dokumentasi (cth: todo, code comments)

// contoh message:
//  feat(product_detail): added product detail page [PWD-132]
//  feat(home): added search products feature
//  fix(products): fixed product card margins
