import React from 'react';
import img1 from '../../../photos/ui ux home/whyChooseUs1.jpg'
import img2 from '../../../photos/ui ux home/whyChooseUs2.jpg'

const WhyChooseUs = () => {
    const videoLink = "https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"
    return (
        <div>
            <div class="section bg-light-color px-0">
                <div class="row row-cols-lg-2 row-cols-1 p-0">
                    {/* col-1 */}
                    <div class="col position-relative ps-0 pe-5 mb-3">
                        <div class="mb-5 pb-5 pe-5">
                            <img src={img1} alt="" class="img-fluid rounded-3" />
                        </div>
                        <div class="position-absolute bottom-0 end-0 w-75 me-3">
                            <div class="position-relative h-100 overflow-hidden custom-border rounded-4">
                                <div class="image-overlay-2"></div>
                                <div class="position-absolute start-0 top-0 w-100 h-100 z-2" >
                                    <div class="d-flex justify-content-center align-items-center h-100">
                                        <button type="button" class="request-loader" data-bs-toggle="modal" data-bs-target="#e119">
                                            <i class="fa-solid fa-play ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                                <img src={img2} alt="image" class="w-100 img-fluid" />
                            </div>
                            <div class="modal fade bg-overlay" id="e119" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content bg-dark-color">
                                        <iframe class="ifr-video" src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-2 */}
                    <div class="col me-auto" style="max-width: 720px;">
                        <div class="d-flex flex-column gap-4 px-5">
                            <span class="fw-semibold">WHY CHOOSE US</span>
                            <h3 class="font-1 fw-semibold">Commited to Your Mental Well Being</h3>
                            <p class="text-gray">
                                Curabitur quis diam malesuada sem porta mollis. Ut vel tortor in neque sollicitudin
                                feugiat a ac ex. Etiam eleifend orci eget tempus rhoncus. Nunc ligula erat, elementum eu
                                augue at, pharetra iaculis leo.
                            </p>
                            <div class="d-flex flex-column gap-4">
                                <div class="r-progress w-100" style="--value:95;">
                                    <span class="font-1 fw-semibold fs-4">Confidentiality</span>
                                    <div class="progress-container mt-2">
                                        <div class="r-progress-bar percentage-label">
                                            <div class="progress-value"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="r-progress w-100" style="--value:98;">
                                    <span class="font-1 fw-semibold fs-4">Consumer Satisfaction</span>
                                    <div class="progress-container mt-2">
                                        <div class="r-progress-bar percentage-label">
                                            <div class="progress-value"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="r-progress w-100" style="--value:98;">
                                    <span class="font-1 fw-semibold fs-4">Theraphy</span>
                                    <div class="progress-container mt-2">
                                        <div class="r-progress-bar percentage-label">
                                            <div class="progress-value"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="r-progress w-100" style="--value:90;">
                                    <span class="font-1 fw-semibold fs-4">Counseling</span>
                                    <div class="progress-container mt-2">
                                        <div class="r-progress-bar percentage-label">
                                            <div class="progress-value"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
