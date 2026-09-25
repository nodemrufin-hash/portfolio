export const Footer = ()=>{
 return (
    <footer className="py-12 px-4  relative border-t bg-card  border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
      
        <p className="text-sm text-muted-foreground">
            {" "}
             &copy; {new Date().getFullYear()} Derrick.co. All rights reserved.</p> 
    </footer>
 );
};