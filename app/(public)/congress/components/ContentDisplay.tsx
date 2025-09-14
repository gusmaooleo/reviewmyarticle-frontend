
import Results from "./Results";
import SearchPanel from "./SearchPanel";
import Paginator from "./Paginator";
import { CongressesPayload } from "@/lib/congress/congress.service";


export default function ContentDisplay({
  payload,
}: {
  payload: CongressesPayload;
}) {
  return (
    <>
      <h1 className="text-xl font-bold color-black">Congressos</h1>
      <SearchPanel />
      <Results congresses={payload.data} />
      <Paginator itemsPerPage={15} total={payload.total} />
    </>
  );
}
