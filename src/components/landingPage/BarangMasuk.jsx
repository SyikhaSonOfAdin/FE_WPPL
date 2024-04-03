import axios from "axios";
import ENDPOINTS from "../../.config/.conf";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import ReceiveForm from "../forms/ReceiveForm";


export default function Dashboard() {
    const user_id = Cookies.get("user_id");
    const company_id = Cookies.get("company_id");
    const auth = Cookies.get("auth");

    const navigate = useNavigate()
    const getData = async () => {
        const result = await axios.get(
            `${ENDPOINTS.GET.ITEMS.RECEIVE}/${user_id}/${company_id}`
        );
        setData(result.data);
    };

    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        getData();

        if (!auth) {
            navigate("/login")
        }
    }, []);

    return (
        <>
        {/* <ReceiveForm/> */}
            <div className="flex flex-col gap-8 w-full h-screen">
                <div className="w-full flex flex-col">
                    <h1 className="font-extrabold p-2 text-sm lg:text-lg ">RECEIVED</h1>
                    <div className="w-full relative flex">
                        <input
                            type="search"
                            className="lg:w-[50%] relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                            placeholder="Search"
                        />
                        <span
                            className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                            id="button-addon2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="flex mt-2">
                        <button className="font-xs text-white text-sm bg-blue-600 border-r shadow-md lg:w-[8%] rounded p-1 my-2">Tambah Barang</button>
                    </div>
                </div>

                <div className="w-full overflow-auto">
                    <table className=" min-w-max w-full text-center text-neutral-500">
                        <thead>
                            <tr className="border-b border-b-gray-200 text-xs font-semibold bg-gray-50">
                                <th className="px-6 py-3">No</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Code</th>
                                <th className="px-6 py-3">Brand</th>
                                <th className="px-6 py-3">Made In</th>
                                <th className="px-6 py-3">Quantity</th>
                                <th className="px-6 py-3">Input Date</th>
                                <th className="px-6 py-3">Input By</th>
                                <th className="px-6 py-3">Company Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0
                                ? data.slice(0, limit).map((items, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b border-b-gray-200 text-sm hover:bg-gray-400/10"
                                        >
                                            <td className="px-6 py-3">{index + 1}</td>
                                            <td className="px-6 py-3">{items.NAME}</td>
                                            <td className="px-6 py-3">{items.CODE}</td>
                                            <td className="px-6 py-3">{items.BRAND}</td>
                                            <td className="px-6 py-3">{items.MADE_IN}</td>
                                            <td className="px-6 py-3">{items.QTY}</td>
                                            <td className="px-6 py-3">{items.INPUT_DATE}</td>
                                            <td className="px-6 py-3">{items.INPUT_BY}</td>
                                            <td className="px-6 py-3">{items.COMPANY_NAME}</td>
                                        </tr>
                                    );
                                })
                                : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
