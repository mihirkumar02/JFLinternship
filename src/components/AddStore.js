import React, { Component } from 'react'
import AddStoreMap from './AddStoreMap'

class AddStore extends Component {
    render() {
        return (
            <div className="AddStore">
                <div className="container-fluid">
                    <div className="storeaddcol">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 left">
                                <div className="leftform">
                                    <form action="" method="">
                                        <div className="form-group">
                                          <label for="storeName"><b>Store Name *</b></label>
                                          <input type="text" className="form-control" placeholder="Enter store Name.."/>
                                        </div>
                                        <div className="form-group">
                                          <label for="tradeZone"><b>Trade Zone *</b></label>
                                          <div className="row">
                                              <div className="col-6">
                                                <input type="radio" name="tradeZone" value="polygon"/> Polygon
                                              </div>
                                              <div className="col-6">
                                                <input type="radio" name="tradeZone" value="radius"/> Radius
                                              </div>
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label for="storePhone"><b>Store Phone</b></label>
                                          <input type="text" className="form-control" placeholder="Phone Number"/>
                                        </div>
                                        <div className="form-group">
                                          <label for="hours"><b>Hours of Operation</b></label>
                                          <div className="row">
                                              <div className="col-4">
                                                <label><b>From</b></label>
                                              </div>
                                              <div className="col-4">
                                                <select name="fromhours">
                                                    <option value="00">00Hrs</option>
                                                    <option value="01">01Hrs</option>
                                                    <option value="02">02Hrs</option>
                                                    <option value="03">03Hrs</option>
                                                    <option value="04">04Hrs</option>
                                                    <option value="05">05Hrs</option>
                                                    <option value="06">06Hrs</option>
                                                    <option value="07">07Hrs</option>
                                                    <option value="08">08Hrs</option>
                                                    <option value="09">09Hrs</option>
                                                    <option value="10">10Hrs</option>
                                                    <option value="11">11Hrs</option>
                                                    <option value="12">12Hrs</option>
                                                    <option value="13">13Hrs</option>
                                                    <option value="14">14Hrs</option>
                                                    <option value="15">15Hrs</option>
                                                    <option value="16">16Hrs</option>
                                                    <option value="17">17Hrs</option>
                                                    <option value="18">18Hrs</option>
                                                    <option value="19">19Hrs</option>
                                                    <option value="20">20Hrs</option>
                                                    <option value="21">21Hrs</option>
                                                    <option value="22">22Hrs</option>
                                                    <option value="23">23Hrs</option>
                                                    <option value="24">24Hrs</option>
                                                </select>
                                              </div>
                                              <div className="col-4">
                                                <select name="frommins">
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                </select>
                                              </div>
                                          </div>
                                          <div className="row">
                                              <div className="col-4">
                                                <label><b>To</b></label>
                                              </div>
                                              <div className="col-4">
                                                    <select name="tohours">
                                                        <option value="00">00Hrs</option>
                                                        <option value="01">01Hrs</option>
                                                        <option value="02">02Hrs</option>
                                                        <option value="03">03Hrs</option>
                                                        <option value="04">04Hrs</option>
                                                        <option value="05">05Hrs</option>
                                                        <option value="06">06Hrs</option>
                                                        <option value="07">07Hrs</option>
                                                        <option value="08">08Hrs</option>
                                                        <option value="09">09Hrs</option>
                                                        <option value="10">10Hrs</option>
                                                        <option value="11">11Hrs</option>
                                                        <option value="12">12Hrs</option>
                                                        <option value="13">13Hrs</option>
                                                        <option value="14">14Hrs</option>
                                                        <option value="15">15Hrs</option>
                                                        <option value="16">16Hrs</option>
                                                        <option value="17">17Hrs</option>
                                                        <option value="18">18Hrs</option>
                                                        <option value="19">19Hrs</option>
                                                        <option value="20">20Hrs</option>
                                                        <option value="21">21Hrs</option>
                                                        <option value="22">22Hrs</option>
                                                        <option value="23">23Hrs</option>
                                                        <option value="24">24Hrs</option>
                                                    </select>
                                              </div>
                                              <div className="col-4">
                                                <select name="tomins">
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                </select>
                                              </div>
                                          </div>
                                        </div>
                                        <label for="accept"><b>Accept Credit Card</b></label>
                                        <div className="row">
                                            <div className="col-6">
                                              <input type="radio" name="accept" value="yes"/> Yes
                                            </div>
                                            <div className="col-6">
                                              <input type="radio" name="accept" value="radius"/> No
                                            </div>
                                        </div>
                                        <label for="parking"><b>Parking Available</b></label>
                                        <div className="row">
                                            <div className="col-6">
                                              <input type="radio" name="parking" value="yes"/> Yes
                                            </div>
                                            <div className="col-6">
                                              <input type="radio" name="parking" value="no"/> No
                                            </div>
                                        </div>
                                        <label for="dark"><b>Dark Kitchen</b></label>
                                        <div className="row">
                                            <div className="col-6">
                                              <input type="radio" name="dark" value="yes"/> Yes
                                            </div>
                                            <div className="col-6">
                                              <input type="radio" name="dark" value="no"/> No
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" class="btn btn-primary">Add Store</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-12 right">
                                <AddStoreMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddStore;
