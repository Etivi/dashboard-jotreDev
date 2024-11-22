import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import { Tab, TabGroup, TabList, TabPanel, TabPanels, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Breadcrumbs } from "../../components/Breadcrumbs";


export const Tickets = () => {
    return (
        <>
            {/* Encabezado */}
            <Breadcrumbs title="Support-center" pagina="Tickets" />
            {/* Buscador */}
            <div className="md:flex-row flex flex-col bg-secondary-100 pr-8 pl-8 pt-8 md:p-16 rounded-tr-lg rounded-tl-lg gap-8 border-t border-r border-l border-secondary-200">
                <div className="flex flex-col gap-8 md:w-1/2 justify-center">
                    <div className="text-2xl text-gray-200">
                        <h2>How Can We Help You?</h2>
                    </div>
                    <form className="relative text-gray-500">
                        <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-white" />
                        <input type="text" placeholder="Ask a question" className="bg-secondary-900 text-sm py-2 ps-10 pe-4 w-full rounded-lg outline-none " />
                    </form>
                </div>
                <div className="flex justify-center md:w-1/2 md:relative">
                    <img src="../../../public/4-dark.svg" alt="enviar" className="md:w-64 md:absolute " />
                </div>
            </div>
            {/* Tabs - Menus */}
            <TabGroup >
                <div className="bg-secondary-100 p-6 rounded-br-lg rounded-bl-lg border-b border-r border-l border-secondary-200">
                    <TabList>
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between bg-secondary-900/40 p-4 md:p-6 rounded-lg">
                            <div className="md:flex gap-4 flex flex-wrap">
                                <Tab className="px-4 py-2 rounded-lg hover:bg-secondary-200 hover:text-primary uppercase font-bold text-sm outline-none data-[selected]:bg-secondary-200 data-[selected]:text-primary">overview</Tab>
                                <Tab className="px-4 py-2 rounded-lg hover:bg-secondary-200 hover:text-primary uppercase font-bold text-sm outline-none data-[selected]:bg-secondary-200 data-[selected]:text-primary">tickets</Tab>
                                <Tab className="px-4 py-2 rounded-lg hover:bg-secondary-200 hover:text-primary uppercase font-bold text-sm outline-none data-[selected]:bg-secondary-200 data-[selected]:text-primary">Tutoriales</Tab>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 font-bold text-secondary-900 bg-primary/90 hover:bg-primary rounded-lg text-sm transition-colors">Create Ticket</button>
                        </div>
                    </TabList>
                </div>
                <TabPanels>
                {/* Overview Panel */}
                    <TabPanel>
                        <div className="grid md:grid-cols-4 gap-8 mt-8 ">
                            <div className="col-span-2 bg-secondary-100 p-8 rounded-lg border border-secondary-200">
                                <div className="md:flex-row flex flex-col gap-4 md:items-center md:justify-between mb-8">
                                    <h4 className="text-xl font-bold">Popular Tickets</h4>
                                    <Link className="text-sm text-primary hover:text-primary transition-colors flex items-center gap-2">Support <IoIosArrowForward /></Link>
                                </div>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                            <div className="col-span-2 bg-secondary-100 p-8 rounded-lg border border-secondary-200">
                                <div className="md:flex-row flex flex-col gap-4 md:items-center md:justify-between mb-8">
                                    <h4 className="text-xl font-bold">Popular Tickets</h4>
                                    <Link className="text-sm text-primary hover:text-primary transition-colors flex items-center gap-2">Support <IoIosArrowForward /></Link>
                                </div>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                            <div className="col-span-2 bg-secondary-100 p-8 rounded-lg border border-secondary-200">
                                <div className="md:flex-row flex flex-col gap-4 md:items-center md:justify-between mb-8">
                                    <h4 className="text-xl font-bold">Popular Tickets</h4>
                                    <Link className="text-sm text-primary hover:text-primary transition-colors flex items-center gap-2">Support <IoIosArrowForward /></Link>
                                </div>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                            <div className="col-span-2 bg-secondary-100 p-8 rounded-lg border border-secondary-200">
                                <div className="md:flex-row flex flex-col gap-4 md:items-center md:justify-between mb-8">
                                    <h4 className="text-xl font-bold">Popular Tickets</h4>
                                    <Link className="text-sm text-primary hover:text-primary transition-colors flex items-center gap-2">Support <IoIosArrowForward /></Link>
                                </div>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure>
                                    <DisclosureButton className="group py-2 flex items-center gap-4 text-lg">
                                        <IoIosArrowForward className="w-5 group-data-[open]:rotate-90 transition duration-300" />
                                        <p className="text-start">what admin theme does</p>
                                        <span className="text-xs bg-secondary-900/30 text-gray-500 px-2 py-1 rounded-lg font-bold">React</span>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="text-gray-500 text-sm origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                        Yes! You can purchase a license that you can share with your entire team.
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        </div>
                    </TabPanel>
                {/* Tickets Panel */}
                    <TabPanel>Content 2</TabPanel>
                {/* Tutoriales Panel */}
                    <TabPanel>Content 3</TabPanel>
                </TabPanels>
            </TabGroup>



        </>
    )
}
