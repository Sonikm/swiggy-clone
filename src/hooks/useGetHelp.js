import { useEffect, useState } from "react"
import getData from "../util/getData"

function useGetHelp() {

const [faqs, setFaqs] = useState(null);

   useEffect(()=> {
    async function fetchData(){
        const data = await getData("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fsupport%2Fissues%2Ffaq%3F");

        setFaqs(data?.data?.issues?.data);
    }

    fetchData();
   }, [])

   return {faqs} ;
}

export default useGetHelp
