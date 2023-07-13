import Image from 'next/image'

export default function Home() {
  return (
    <div class="navigation">
                      <div class="container-fluid">
                        <div class="navigation-logo">
                          <div class="logo">
                            <a href="index.html" title="De Dakvergroeners"
                              ><img
                                src="bestanden/dakvergroeners-trademark49b2.svg?1645706094="
                                class="img-responsive"
                                alt="De Dakvergroeners"
                                fetchpriority="high"
                                // style="max-width: 400px; max-height: 300px"
                                width="333"
                                height="98"
                            /></a>
                          </div>
                        
                        </div>
                        <div class="navigation-steps hidden-xs hidden-sm">
                          <a
                            class="js-step step step--current"
                            data-toggle="tab"
                            href="#step-layout"
                            data-step-number="0"
                          >
                            Afmetingen
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-system"
                            data-step-number="1"
                          >
                            Systeem
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-gravel"
                            data-step-number="2"
                          >
                            Grindstrook
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-obstacles"
                            data-step-number="3"
                          >
                            Obstakels
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-water-drain"
                            data-step-number="4"
                          >
                            Waterafvoer
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-fertilizer"
                            data-step-number="5"
                          >
                            Meststof
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-construct"
                            data-step-number="6"
                          >
                            Aanleggen
                          </a>

                          <a
                            class="js-step step"
                            data-toggle="tab"
                            href="#step-finish"
                            data-step-number="7"
                          >
                            Afronden
                          </a>
                        </div>
                        <div class="navigation-controls">
                          <a
                            class="btn btn--secondary js-step-action"
                            data-action="previous"
                          >
                            <i class="far fa-arrow-left"></i>
                          </a>
                          <a
                            class="btn btn--primary js-step-action"
                            data-action="next"
                          >
                            <i class="far fa-arrow-right"></i>
                          </a>
                          <a
                            class="btn btn--primary js-step-action"
                            // style="display: none"
                            data-action="finish"
                          >
                            <i class="far fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
  )
}
