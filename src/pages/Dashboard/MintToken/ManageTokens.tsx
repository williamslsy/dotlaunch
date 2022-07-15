import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Card, CardIcon } from '../../../components/common/Card';
import { customToast } from '../../../components/common/NotificationToast';
import { shortenAddress } from '../../../utils';

const ManageTokens = () => {
  return (
    <div>
      <div className="py-5">
        <h3 className="text-3xl font-bold">Manage Tokens</h3>
        <p>Tokens generated on our platform.</p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card className="md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-5 items-center text-left">
            <CardIcon>
              <i className="las la-coins"></i>
            </CardIcon>
            <div className="space-y-3 flex-1">
              <h3 className="font-bold text-xl">Polygon (PLG)</h3>
              <p className="font-semibold">
                Supply: <span className="float-right">9200000</span>
              </p>
              <p className="font-semibold">
                Token Type: <span className="float-right">Standard</span>
              </p>
              <p className="font-semibold">
                Address:{' '}
                <span className="float-right">
                  <a
                    className=" hover:text-custom-light-primaryBlue mr-3 text-sm"
                    href="#"
                  >
                    {shortenAddress(
                      '0x81507617417b71fC2d231F187bE4Bd919e572761'
                    )}
                  </a>
                  <CopyToClipboard
                    onCopy={() =>
                      customToast({ message: 'Address Copied', duration: 2000 })
                    }
                    text="0x81507617417b71fC2d231F187bE4Bd919e572761"
                  >
                    <i className="las la-copy shadow-md p-2 rounded-full bg-custom-light-primaryBlue cursor-pointer text-white"></i>
                  </CopyToClipboard>
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageTokens;
