export interface TaxiFareRequest {
  vendorId: 'CMT' | 'VTS';
  rateCode: number;
  passengerCount: number;
  tripDistance: number;
  paymentType: 'CRD' | 'CSH' | 'DIS' | 'NOC' | 'UNK';
}
