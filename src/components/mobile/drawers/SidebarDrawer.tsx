'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Drawer, DrawerProps } from 'antd';

import ContactDrawer from './ContactDrawer';
import { ModalFeedback, ModalReview } from '../../modal';

function SidebarDrawer(props: DrawerProps) {
  const { open, onClose } = props;
  const [childDrawer, setChildDrawer] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showReview, setShowReview] = useState(false);

  return (
      <Drawer
          open={open}
          onClose={onClose}
          placement="left"
          width="100%"
          styles={{
              header: {
                  justifyContent: "end",
                  backgroundColor: "#4755D4",
              },
              body: {
                  padding: "unset",
              },
          }}
          closeIcon={
              <button className="text-2xl text-white font-semibold bg-transparent">
                  x
              </button>
          }
      >
          <div className=" relative">
              {/* Profile */}
              <div
                  className="
                        relative
                        h-[170px]
                        pb-8 px-4
                        rounded-br-[30px]
                        text-white
                        bg-[#4755D4]
                    "
              >
                  {/* Close button */}
                  {/* <button
                        className="
                            absolute
                            top-4 right-5
                            text-2xl font-semibold
                        "
                        onClick={onClose}
                    >
                        x
                    </button> */}

                  {/* Avatar */}
                  <div
                      className="
                            absolute
                            w-[100px] h-[100px]
                            bottom-0 right-8
                        "
                  >
                      <Image
                          className="my-2 w-full h-full rounded-3xl"
                          src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                          alt=""
                          width={100}
                          height={100}
                      />
                  </div>

                  {/* Name */}
                  <div className=" text-2xl font-bold">Phó Đức Thành</div>

                  {/* Email */}
                  <div className="text-sm">ducthanh@gmail.com</div>
              </div>

              {/* List options */}
              <div className="bg-[#4755D4] mb-[70px]">
                  <div
                      className="
                            pt-5 px-8
                            rounded-tl-[30px] 
                            text-base text-[#262C41] font-semibold
                            bg-white 
                        "
                  >
                      {/* Law QA */}
                      <Link
                          href="/mobile/law-qa"
                          className="flex items-center mb-5 text-black"
                      >
                          <Image
                              src="https://ttpl.vn/assets/images/mobile/question.png"
                              alt=""
                              width={31}
                              height={31}
                          />
                          <div className="ml-5">Hỏi đáp pháp luật</div>
                      </Link>

                      {/* Các gói dịch vụ */}
                      <Link
                          href="/mobile/homepage/premium"
                          className="flex items-center mb-5 text-black"
                      >
                          <Image
                              src="https://ttpl.vn/assets/images/mobile/box.jpg"
                              alt=""
                              width={31}
                              height={31}
                          />
                          <div className="ml-5">Các gói dịch vụ</div>
                      </Link>

                      {/* Giới thiệu */}
                      <div className="flex items-center mb-5">
                          <Image
                              src="https://ttpl.vn/assets/images/mobile/invitation.jpg"
                              alt=""
                              width={31}
                              height={31}
                          />
                          <div className="ml-5">Giới thiệu</div>
                      </div>

                      {/* Liên hệ */}
                      <div
                          className="flex items-center mb-5"
                          onClick={() => setChildDrawer(true)}
                      >
                          <Image
                              src="https://ttpl.vn/assets/images/mobile/contacts.png"
                              alt=""
                              width={31}
                              height={31}
                          />
                          <div className="ml-5">Liên hệ</div>
                      </div>
                      <ContactDrawer
                          open={childDrawer}
                          onClose={() => setChildDrawer(false)}
                      />

                      {/* Phản hồi */}
                      <div
                          className="flex items-center mb-5"
                          onClick={() => setShowFeedback(true)}
                      >
                          <Image
                              src="https://ttpl.vn/assets/images/mobile/back.png"
                              alt=""
                              width={31}
                              height={31}
                          />
                          <div className="ml-5">Phản hồi</div>
                      </div>

                      {/* Đánh giá */}
                      <div
                          className="flex items-center mb-5"
                          onClick={() => setShowReview(true)}
                      >
                          <Image
                              src="https://ttpl.vn/assets/images/mobile/review.png"
                              alt=""
                              width={31}
                              height={31}
                          />
                          <div className="ml-5">Đánh giá</div>
                      </div>
                  </div>
              </div>

              {/* Footer sidebar */}
              <div
                  className="
                        text-[#B5B9C7]
                        px-8 pt-10 pb-5
                    "
              >
                  {/* border */}
                  <div className="mb-10 mx-3 border-t-2" />

                  {/* Company profile */}
                  <div className="flex items-center mb-5">
                      <Image
                          src="https://ttpl.vn/assets/images/mobile/logo-legalzone.png"
                          alt=""
                          width={31}
                          height={31}
                      />
                      <span className="ml-5 text-base ">
                          Công ty TNHH Legalzone
                      </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center mb-3">
                      <Image
                          src="https://ttpl.vn/assets/images/mobile/marker.png"
                          alt=""
                          width={31}
                          height={31}
                      />
                      <span className="ml-5 text-xs">
                          Phòng 1603, Sảnh A3, Toà nhà Ecolife, 58 Tố Hữu, Trung
                          Văn, Nam Từ Liêm, Hà Nội
                      </span>
                  </div>

                  {/* Phone */}
                  <Link
                      href="tel:0888889366"
                      className="flex items-center mb-3 text-[#B5B9C7]"
                  >
                      <Image
                          src="https://ttpl.vn/assets/images/mobile/Icon-feather-phone.png"
                          alt=""
                          width={31}
                          height={31}
                      />
                      <span className="ml-5 text-xs">0888889366</span>
                  </Link>

                  {/* Mail to */}
                  <Link
                      href="mailto:support@legalzone.vn"
                      className="flex items-center text-[#B5B9C7]"
                  >
                      <Image
                          src="https://ttpl.vn/assets/images/mobile/Icon-feather-mail.png"
                          alt=""
                          width={31}
                          height={31}
                      />
                      <span className="ml-5 text-xs">support@legalzone.vn</span>
                  </Link>
              </div>

              {/* Feedback modal */}
              <ModalFeedback
                  open={showFeedback}
                  onCancel={() => setShowFeedback(false)}
              />

              {/* Review modal */}
              <ModalReview
                  open={showReview}
                  onCancel={() => setShowReview(false)}
              />
          </div>
      </Drawer>
  );
}

export default SidebarDrawer;
