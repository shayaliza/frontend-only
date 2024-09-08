export const isIOSMobileOrTablet = () => {
    const userAgent = navigator.userAgent;
    return /iPhone|iPad|iPod/i.test(userAgent);
  };