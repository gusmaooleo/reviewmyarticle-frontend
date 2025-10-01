"use client";

import { updateAppState } from "@/app/actions/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginRedirect({ congressId }: { congressId: number }) {
  return (
    <div className="flex flex-row gap-3 items-center">
      <Link
        onClick={async () =>
          await updateAppState({ currentLoggedInCongress: congressId })
        }
        href={"/login"}
        className="underline text-sm text-(--default-dark)"
      >
        Entrar com minha conta
      </Link>
      <Link
        onClick={async () =>
          await updateAppState({ currentLoggedInCongress: congressId })
        }
        href={"/subscribe"}
      >
        <Button>Inscrever -&gt;</Button>
      </Link>
    </div>
  );
}
