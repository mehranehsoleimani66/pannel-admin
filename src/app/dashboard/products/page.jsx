import Image from "next/image";
import Link from "next/link";

import { deleteProduct } from "../../lib/actions";
import Search from "../../ui/dashboard/search/Search";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import { fetchProducts } from "../../lib/data";

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className="p-5 bg-[#182237] mt-5 ml-5 mr-5 rounded-xl">
      <div className="flex items-center justify-between">
        <Search placeholder="search a products..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 text-[#b7bac1] bg-[#5d57c9] border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="flex items-center  gap-5">
                  <Image
                    src={product?.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td className="flex gap-3">
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className="bg-[teal] pt-2 pb-3 text-center pr-3 pl-3 rounded-md text-white border-none cursor-pointer">
                    Veiw
                  </button>
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product.id} />
                  <button className="bg-[crimson] pt-2 pb-2 pr-3 pl-3 text-center rounded-md text-white border-none cursor-pointer">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductPage;
