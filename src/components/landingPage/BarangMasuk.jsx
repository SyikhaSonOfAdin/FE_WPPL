import axios from "axios";
import ENDPOINTS from "../../.config/.conf";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Dialog, Option, Select, Input } from "@material-tailwind/react";

export default function Dashboard() {
  const user_id = Cookies.get("user_id");
  const company_id = Cookies.get("company_id");
  const auth = Cookies.get("auth");

  const navigate = useNavigate();
  const getData = async () => {
    const result = await axios.get(
      `${ENDPOINTS.GET.ITEMS.RECEIVE}/${user_id}/${company_id}`
    );
    setData(result.data);
  };

  const getList = async () => {
    const result = await axios.get(
      `${ENDPOINTS.GET.ITEMS.LIST}/${user_id}/${company_id}`
    );
    setList(result.data);
  };

  const sendData = async () => {
    const data = new URLSearchParams();
    const currentDate = new Date().toISOString();

    data.append("item_id", receive.item_id);
    data.append("qty", receive.qty);
    data.append("input_by", user_id);
    data.append("input_date", currentDate);
    data.append("company_id", company_id);

    const result = await axios.post(
      `${ENDPOINTS.POST.ITEMS.RECEIVE.ADD}`,
      data
    );

    getData()
    getList()
  };

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [receive, setReceive] = useState({
    item_id: "",
    qty: "",
  });
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    getData();
    getList();

    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Dialog
        open={open}
        handler={setOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="md"
        className="rounded-md"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendData();
          }}
          className="flex flex-col w-full justify-center items-center gap-2 bg-white shadow-xl rounded-lg p-3 pt-1 z-20"
        >
          <div className="w-full flex items-start justify-between mb-3">
            <div className="w-full">
              <h1 className="font-semibold text-[#2E3192]">Receive</h1>
            </div>
            <div className="flex w-full justify-end">
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="group p-1 -mr-2 rounded hover:bg-red-500 transition-all duration-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  className="w-[20px] md:w-[25px] fill-[#2E3192] group-hover:fill-white transition-all duration-100"
                >
                  <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className="mb-5">
              <Select
                color="indigo"
                label="Select Items"
                className="focus:outline-none"
                onChange={(val) => {
                  setReceive({
                    ...receive,
                    item_id: val,
                  });
                }}
              >
                {list.length > 0
                  ? list.map((item) => (
                      <Option key={item.ID} value={item.ID.toString()}>
                        {item.NAME}
                      </Option>
                    ))
                  : null}
              </Select>
            </div>

            {/* QTY OF ADDED RECEIVE ITEMS */}
            <div className="mb-5">
              <Input
                required
                color="indigo"
                label="Qty"
                onChange={(e) => {
                  setReceive({
                    ...receive,
                    qty: e.target.value,
                  });
                }}
              />
            </div>

            {/* INPUT BUTTON OF ADDED RECEIVE ITEMS */}
            <div className="">
              <button
                type="submit"
                className="w-full rounded-md p-1 bg-[#2E3192]/90 hover:bg-[#2E3192]/70 text-white font-medium"
              >
                Input
              </button>
            </div>

            <div className="w-full flex flex-col mb-3"></div>
          </div>
        </form>
      </Dialog>

      <div className="flex flex-col gap-8 w-full h-screen">
        <div className="w-full flex flex-col">
          <h1 className="font-extrabold p-2 text-sm lg:text-lg ">RECEIVED</h1>
          <form
            className="relative flex w-full flex-wrap items-stretch"
            onSubmit={(e) => {
              e.preventDefault();
              //   hasilFilter();
            }}
          >
            <input
              type="search"
              className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e) => {
                // setSearch(e.target.value);
              }}
            />
            <button
              type="submit"
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="fill-[#2E3192] h-5 w-5"
              >
                <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
              </svg>
            </button>
          </form>
          <div className="flex mt-2">
            <button
              onClick={() => setOpen(true)}
              className="font-xs text-white text-sm bg-blue-600 border-r shadow-md lg:w-[8%] rounded p-1 my-2"
            >
              Tambah Barang
            </button>
          </div>
        </div>

        <div className="w-full overflow-auto shadow">
          <table className=" min-w-max w-full text-center">
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
                <th className="px-6 py-3">Action</th>
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
                        <td className="px-6 py-3">-</td>
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
