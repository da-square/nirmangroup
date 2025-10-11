// utils/contactModalEvent.ts
export const CONTACT_MODAL_EVENT = "openContactModal";
export const DOWNLOAD_AFTER_FORM_EVENT = "downloadAfterForm";

// open contact form
export const triggerContactModal = () => {
  console.log("📢 Dispatching openContactModal event");
  window.dispatchEvent(new Event(CONTACT_MODAL_EVENT));
};

// trigger download after form submit
export const triggerDownloadAfterForm = () => {
  console.log("📢 Dispatching downloadAfterForm event");
  window.dispatchEvent(new Event(DOWNLOAD_AFTER_FORM_EVENT));
};
