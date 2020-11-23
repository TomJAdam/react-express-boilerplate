import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const [cookie, setCookie] = useState({ user: null });
  const [state, setState] = useState({
    gigs: [],
    categories: []
  });

  useEffect(() => {
    axios.get("/login").then(res => {
      setCookie({ ...res.data });
    });
    const promise1 = axios.get("/api/gigs").then(res => res.data);
    const promise2 = axios.get('/api/categories').then(res => res.data);
    Promise.all([promise1, promise2]).then(res => {
      setState(prev => ({...prev, gigs: res[0], categories: res[1]}));
    });

    
  }, []);

  return { cookie, setCookie, state, setState };
}
