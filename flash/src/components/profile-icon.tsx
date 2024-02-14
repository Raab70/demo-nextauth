'use client';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { classNames } from '@/lib/utils'

export default function ProfileIcon() {
  const { data: session, status } = useSession()
  const username: string | null = session?.user && session.user.name ? session.user.name : null;

  if (status === "authenticated" && !!username) {
    return (
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
                <div className="Avatar">
                  {username.substring(0, 1).toUpperCase()}
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <div onClick={() => signOut({ callbackUrl: '/' })}>
              <Menu.Item>
                {({ active }) => (
                  <p
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Sign out
                  </p>
                )}
              </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }

  return (
    // <a href='login'>
    <button
      type="button"
      className="
                    text-gray-300 bg-violet-500
                    hover:bg-gray-700
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-3 py-2"
      onClick={() => signIn("email", { callbackUrl: '/' })}
    >
      Login
    </button>
    // </a>
  )
}