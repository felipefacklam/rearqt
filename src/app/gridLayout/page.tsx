import Grid from "@/components/Grid";

export default function PageGridLayout() {
     
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[90%] sm:w-3/4 lg:w-2/5">
                <Grid cols={1} sm={2} md={4} lg={8}>
                    <div className="h-36 w-full bg-purple-500">#1</div>
                    <div className="h-36 w-full bg-green-500">#2</div>
                    <div className="h-36 w-full bg-yellow-500">#3</div>
                    <div className="h-36 w-full bg-cyan-500">#4</div>
                    <div className="h-36 w-full bg-rose-500">#5</div>
                    <div className="h-36 w-full bg-zinc-500">#6</div>
                    <div className="h-36 w-full bg-blue-500">#7</div>
                    <div className="h-36 w-full bg-red-500">#8</div>
                </Grid>
            </div>
        </div>
    );
}
