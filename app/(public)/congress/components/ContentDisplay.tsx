
import Results from "./Results";
import SearchPanel from "./SearchPanel";
import {
  searchCongresses,
} from "../actions/congress.actions";
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
      <SearchPanel formAction={searchCongresses} />
      <Results congresses={payload.data} />
      <Paginator itemsPerPage={15} total={payload.total} />
    </>
  );
}
