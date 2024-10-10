import React from "react";
import { Button, Drawer } from "flowbite-react";
import { FaGear } from "react-icons/fa6";
import * as components from "../components";

const Settings = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Drawer className="z-50" open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Settings" titleIcon={() => <><FaGear className="me-2" size={20} /></>} />
                <Drawer.Items>
                    <components.settingsControl />
                </Drawer.Items>
            </Drawer>
            <div className="fixed left-0 top-56 z-40">
                <Button className="rounded-l-sm bg-white p-0 text-gray-700" onClick={() => setIsOpen(true)}>
                    <FaGear size={32} />
                </Button>
            </div>
        </>
    )
}

export default Settings
