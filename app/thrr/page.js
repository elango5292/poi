"use client"
export default function thrr() {

    
    async function ty() {
        try {
            const response = await fetch("/api/test/?p=poi&s=apple",{
                method: "GET",
                
            });
           
            console.log(await response?.json());
          } catch (error) {
            console.error(error);
          }
    }
  
    ty();
  
    return (
      <p className="mt-24">
        Jeryue
      </p>
    );
  }