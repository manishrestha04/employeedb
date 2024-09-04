import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = ()=> {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    } 

    const actionbar = ( 
    <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionbar}>
        <p>
            Here is an important agreement for you to accept.
        </p>

    </Modal>

    return(
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi risus, sagittis ut molestie a, lacinia et enim. Sed quis metus nec mauris sodales sodales. Etiam nulla neque, lobortis nec sagittis at, pharetra a nisl. Cras maximus placerat sodales. Nunc ut turpis pulvinar, feugiat justo malesuada, congue massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer luctus placerat neque sit amet faucibus. Etiam facilisis euismod accumsan. Nullam ac eros eget lorem eleifend sollicitudin eu ut ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>

            
        </div>
    )
}

export default ModalPage;