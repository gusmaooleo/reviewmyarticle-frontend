import { CongressService } from "@/lib/congress/congress.service";
import ContentDisplay from "./components/ContentDisplay";
import { TranslucentBoxContainer } from "@/components/shared/TranslucentBoxContainer";

type SearchProps = Promise<{ q?: string, page?: string }>;

export default async function CongressesPage(props: {
  searchParams: SearchProps;
}) {
  const { q = "", page = "1" } = await props.searchParams;
  const p = parseInt(page) || 0;
  const initialResults = await new CongressService().getCongresses(q, p);

  return (
    <TranslucentBoxContainer>
      <ContentDisplay payload={initialResults} />
    </TranslucentBoxContainer>
  );
}
