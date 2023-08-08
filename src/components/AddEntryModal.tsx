import { useState } from "react";
import { api } from "~/utils/api";

type Props = {
  modalShown: boolean;
  closeModal: () => void;
  refetch?: () => void;
};
const AddEntryModal = ({ modalShown, closeModal, refetch }: Props) => {
  const { mutate } = api.user.addEvent.useMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [ttl, setTtl] = useState(0);
  if (!modalShown) return null;
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-2xl">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create a new Event
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              onClick={() => {
                closeModal();
              }}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-6 p-6">
            <div className="flex items-center gap-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-gray-300 px-4 py-2 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 sm:text-sm"
                  placeholder="Event name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="block w-full rounded-md border-gray-300 px-4 py-2 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 sm:text-sm"
                  placeholder="Event description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-full rounded-md border-gray-300 px-4 py-2 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 sm:text-sm"
                  placeholder="Event date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Time
              </label>
              <div className="mt-1">
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="block w-full rounded-md border-gray-300 px-4 py-2 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 sm:text-sm"
                  placeholder="Event time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                mutate(
                  { name, description, date, time, ttl },
                  {
                    onSuccess: () => {
                      if (refetch) refetch();
                      closeModal();
                    },
                  }
                );
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
