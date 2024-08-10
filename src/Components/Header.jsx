'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="w-auto h-8" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link to="/add-quiz" className="text-sm font-semibold leading-6 text-gray-900">
            Add Quiz
          </Link>
          <Link to="/view-quiz" className="text-sm font-semibold leading-6 text-gray-900">
            View Quiz
          </Link>
          <Link to="/play-quiz" className="text-sm font-semibold leading-6 text-gray-900">
            Play Quiz
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900">
            Register <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Add Quiz
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  View Quiz
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Play Quiz
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
