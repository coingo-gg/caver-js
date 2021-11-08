/*
    Copyright 2021 The caver-js Authors
    This file is part of the caver-js library.
    The caver-js library is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    The caver-js library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with the caver-js. If not, see <http://www.gnu.org/licenses/>.
*/

import { Keyring } from '../../../caver-wallet/src/keyring/keyringFactory'
import SignatureData from '../../../caver-wallet/src/keyring/signatureData'
import AbstractTransaction, { CreateTransactionObject } from './abstractTransaction'

export default class AbstractFeeDelegatedTransaction extends AbstractTransaction {
    constructor(typeString: string, createTxObj: CreateTransactionObject)

    signAsFeePayer(key: string | Keyring, index?: number, hasher?: Function): Promise<AbstractFeeDelegatedTransaction>
    appendFeePayerSignatures(signatures: string[] | string[][] | SignatureData | SignatureData[]): void
    combineSignedRawTransactions(rlpEncodedTxs: string[]): string
    getRLPEncodingForFeePayerSignature(): string
    recoverFeePayerPublicKeys(): string[]

    private _feePayer: string
    public feePayer: string
    private _feePayerSignatures: SignatureData[]
    public feePayerSignatures: SignatureData[]
}
