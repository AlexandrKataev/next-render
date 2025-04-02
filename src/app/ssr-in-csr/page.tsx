import { ClientComponentWithChildren } from "@/components/client-component-with-children/ClientComponentWithChildren";

export default function SsrInCsr() {
  return (
    <div>
      <h1>SsrInCsr</h1>
      <div>
        <ClientComponentWithChildren>Нажми</ClientComponentWithChildren>
      </div>
    </div>
  );
}
