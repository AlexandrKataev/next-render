import { ClientComponent } from "@/components/client-component";

export default function CsrInSsr() {
  return (
    <div className="flex flex-col gap-4">
      <h1>CsrInSsr</h1>
      <ClientComponent />
    </div>
  );
}
