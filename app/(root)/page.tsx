import {Button} from  "@/components/ui/button"
import { Input } from "@/components/ui/input";
import Search from "../Components/SearchForm";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
          <h1 className="heading">
              Pitch your StartUp, <br/>
              Connect with Entrepreneurs
          </h1>

          <p>Submit Ideas,Vote on Pitches, and Get Noticed in Virtual Competitions</p>
          <Search/>
      </section>
    </>
  );
}
