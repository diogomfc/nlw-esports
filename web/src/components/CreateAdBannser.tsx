import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 bg-nlw-Gradient self-stretch rounded-lg overflow-hidden">
      <div className=" bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="font-bold  text-2xl text-white block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 text-sm block">Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className="bg-violet-500 hover:bg-violet-700 text-white font-medium py-3 px-4 rounded-lg flex gap-3 items-center">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}