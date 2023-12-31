import { useEffect, useState } from "react"
import getData from "../util/getData"

function useGetHelp() {

const [faqs, setFaqs] = useState(null);

   useEffect(()=> {
    async function fetchData(){
        const data = await getData("https://www.swiggy.com/dapi/support/issues/faq?");

        setFaqs(data?.data?.issues?.data);
    }

    fetchData();
   }, [])

   return {faqs} ;
}

export default useGetHelp
