"use client"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Post', href: '/post', current: false },
    { name: 'Verify', href: '/verify', current: false },
    { name: 'Innovations', href: '/innovations', current: false },
    { name: 'About', href: '/about', current: false }
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const path = usePathname();
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(path);
    return (
        <Disclosure
            as="nav"
            className={`border-0  z-50 fixed w-screen overflow-hidden top-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ${
                scrollPosition > 2 ? 'ring-1 ring-inset ring-white/10 bg-opacity-5 backdrop-blur-md' : ' backdrop-blur-sm'
                }`}
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-10 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="/white.svg"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="sm:content-center	hidden sm:ml-6 sm:block">
                                    <div className="flex  space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    path == item.href ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                                    ' px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
