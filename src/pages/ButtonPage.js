/* import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";


function App () {
    const handleClick = () => {
        console.log('Click')
    }

    return (
        <div>
            <div>
                <Button primary rounded className="mb-5" 
                onClick={handleClick}>
                <GoCloudDownload />
                Click Me!
                </Button>
            </div>
            
            <div>
                <Button secondary onMouseEnter={handleClick} className="mb-5">
                <GoBell />
                Show Ads!
                </Button>
            </div>
            
            <div>
                <Button success className="mb-5" rounded onMouseExit={handleClick}>
                <GoDatabase />
                Hi There!
                </Button>
            </div>
            
            <div>
                <Button warning outlined rounded>GO GO !</Button>
            </div>
            
            <div>
                <Button danger rounded outlined>See You Soon</Button>
            </div>
        </div>
    )
}

export default App; */

import Button from '../components/Button';
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";


function ButtonPage () {
    const handleClick = () => {
        console.log('click');
    }

    return (
        <div>
        <div>
            <Button primary className="mb-5" rounded >
                Primary
            </Button>
        </div>

        <div>
            <Button success className="mb-5" onClick={handleClick}>
                <GoCloudDownload/>
                Secondary
            </Button>
        </div>
        <div>
                <Button secondary onMouseEnter={handleClick} className="mb-5">
                <GoBell />
                Show Ads!
                </Button>
            </div>

            <div> 
                <Button danger className="mb-5" rounded outlined >
                    <GoDatabase />
                    Warning!!!
                </Button>
            </div>
       </div> 
    )
}

export default ButtonPage;


