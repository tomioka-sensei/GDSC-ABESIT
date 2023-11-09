import Navbar from "@/components/Navbar";
import TeamSection from "@/components/Team";
import Footer from "@/components/Footer";
import Head from "next/head";
import ProgressBar from "@/components/ProgressBar";

const Team = () => {
    return (
        <>
            <Head>
                <title>Team | GDSC ABESIT</title>
            </Head>
            <ProgressBar />
            <main className="flex flex-col bg-white dark:bg-neutral-900  items-center justify-between">
                <Navbar />
                <div className="pt-24">
                    <TeamSection />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default Team;