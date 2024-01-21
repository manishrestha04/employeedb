import Accordion from '../components/Accordion';

function AccordionPage () {

    const items = [
        {
            id : '1zdsfsdf',
            label: 'Can I use React on a project?',
            content: 'Yes you can, For ever young .. i wanna be forever young'
        },
        {
            id: '123sfdsdf',    
            label: 'Can I use JAva on a project?',
            content: 'Yes yes yse you can'
        },
        {
            id: '45rrg',
            label: 'Can I use Tawa on a project?',
            content: 'Yes yes you can'
        }
    ]
    

    return <Accordion items={items}/>
}

export default AccordionPage; 
    
