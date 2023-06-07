import React from "react";
import { type NewSite } from "~/database/schemas/site";
import Modal from "~/components/modal";
import ModalBody from "~/components/modal-body";
import ModalActions from "~/components/modal-actions";
import { api } from "~/utils/api";

export interface NewSiteModalHandle {
  open: () => void;
}

interface NewSiteModalProps {
  onDataChange: () => void;
}

const DefaultNewSite: NewSite = {
  id: "",
  name: "",
  userId: "",
};

const NewSiteModal: React.ForwardRefRenderFunction<
  NewSiteModalHandle,
  NewSiteModalProps
> = (
  { onDataChange },
  forwardedRef: React.ForwardedRef<NewSiteModalHandle>
) => {
  const [isOpen, setOpen] = React.useState(false);
  const [site, setSite] = React.useState<NewSite>(DefaultNewSite);
  const insertSite = api.sites.insert.useMutation();

  const onSaveChanges = React.useCallback(() => {
    (async () => {
      await insertSite.mutateAsync(site);
      onDataChange();
      setOpen(() => false);
    })()
      .then(() => console.log("Added new site."))
      .catch((error) => console.error(error));
  }, [onDataChange, site, insertSite]);

  React.useImperativeHandle(forwardedRef, () => ({
    open() {
      setSite(() => DefaultNewSite);
      setOpen(() => true);
    },
  }));

  return (
    <Modal open={isOpen} setOpen={setOpen} title="Add Site">
      <ModalBody>
        <div className="flex w-full flex-col">
          <label
            className="text-l mb-2 font-semibold text-slate-500"
            htmlFor="new-site-modal-name-input"
          >
            Site Name
          </label>
          <input
            id="new-site-modal-name-input"
            type="text"
            autoComplete="off"
            className="rounded border-2 border-slate-300 p-2"
            value={site.name}
            onChange={(event) =>
              setSite((site: NewSite) => ({
                ...site,
                name: event.target.value,
              }))
            }
          />
        </div>
      </ModalBody>
      <ModalActions>
        <button
          className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
          type="button"
          onClick={() => setOpen(() => false)}
        >
          Close
        </button>
        <button
          className="mb-1 mr-1 rounded bg-green-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-green-700"
          type="button"
          onClick={onSaveChanges}
        >
          Save
        </button>
      </ModalActions>
    </Modal>
  );
};

export default React.forwardRef(NewSiteModal);
